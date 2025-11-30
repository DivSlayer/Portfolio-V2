import {PLanguage} from "./programing_language";

export interface Project {
    id: string;
    banner: string;
    name: string;
    description: string | null;
    url: string;
    languages: PLanguage[];


}