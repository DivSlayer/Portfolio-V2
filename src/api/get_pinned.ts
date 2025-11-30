// scripts/get-pinned.js
// Node 18+ (available in GitHub Actions runners)
import fs from "fs/promises";
import 'dotenv/config'

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

async function fetchPinned(username, first = 6, token) {
    const query = `
  query GetPinned($login: String!, $first: Int = 6) {
    user(login: $login) {
      pinnedItems(first: $first, types: REPOSITORY) {
        edges {
          node {
            ... on Repository {
              id name description url stargazerCount forkCount primaryLanguage { name color } updatedAt homepageUrl
            }
          }
        }
      }
    }
  }`;

    const body = JSON.stringify({query, variables: {login: username, first}});

    const res = await fetch(GITHUB_GRAPHQL, {
        method: "POST",
        headers: {
            Authorization: `bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
            "User-Agent": "get-pinned-script"
        },
        body
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`GitHub GraphQL error: ${res.status} ${text}`);
    }
    const json = await res.json();
    if (json.errors) throw new Error("GraphQL errors: " + JSON.stringify(json.errors));

    const edges = json.data?.user?.pinnedItems?.edges ?? [];
    const projects = edges.map(e => {
        const n = e.node;
        return {
            id: n.id,
            name: n.name,
            description: n.description ?? null,
            url: n.url,
            homepage: n.homepageUrl ?? null,
            stars: n.stargazerCount ?? 0,
            forks: n.forkCount ?? 0,
            language: n.primaryLanguage?.name ?? null,
            languageColor: n.primaryLanguage?.color ?? null,
            updatedAt: n.updatedAt ?? null
        };
    });

    return projects;
}

async function run() {
    const username = process.env.PINNED_USERNAME || process.argv[2];
    const first = parseInt(process.env.PINNED_FIRST || process.argv[3] || "6", 10);
    const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;

    if (!username) {
        console.error("Missing username. Set PINNED_USERNAME env or pass as first arg.");
        process.exit(2);
    }
    if (!token) {
        console.error("Missing GH_TOKEN (repo secret) or GITHUB_TOKEN.");
        process.exit(2);
    }

    const projects = await fetchPinned(username, first, token);

    // Write to public/pinned.json (works for typical static sites)
    const outPath = "./public/pinned.json";
    await fs.mkdir("./public", {recursive: true});
    await fs.writeFile(outPath, JSON.stringify(projects, null, 2), "utf8");
    console.log(`Wrote ${projects.length} projects to ${outPath}`);
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
