import Django from "../assets/Languages/django-svgrepo-com.svg";
import React from "../assets/Languages/react-svgrepo-com.svg";
import Flutter from "../assets/Languages/flutter-svgrepo-com.svg";
import Python from "../assets/Languages/python-svgrepo-com.svg";
import Nuxt from "../assets/Languages/nuxt-svgrepo-com.svg";
import Vue from "../assets/Languages/vue-9-logo-svgrepo-com.svg";
import TypeScript from "../assets/Languages/typescript-official-svgrepo-com.svg";
import HTML from "../assets/Languages/html-5-svgrepo-com.svg";
import SCSS from "../assets/Languages/scss-svgrepo-com.svg";
import docker from "../assets/Languages/docker-svgrepo-com.svg";
import git from "../assets/Languages/git-svgrepo-com.svg";
import PHP from "../assets/Languages/php-svgrepo-com.svg";
import Laravel from "../assets/Languages/laravel-svgrepo-com.svg";
import Flask from "../assets/Languages/flask-svgrepo-com.svg";
import Dart from "../assets/Languages/dart-svgrepo-com.svg";
import Java from "../assets/Languages/java-svgrepo-com.svg";
import Linux from "../assets/Languages/linux-svgrepo-com.svg";
import FFMpeg from "../assets/Languages/ffmpeg-svgrepo-com.svg";
import AEffects from "../assets/Languages/after-effects-svgrepo-com.svg";
import AdobePremiere from "../assets/Languages/adobe-premiere-svgrepo-com.svg";
import AdobePhotoshop from "../assets/Languages/photoshop-svgrepo-com.svg";
import NginxI from "../assets/Languages/nginx-svgrepo-com.svg";


export interface PLanguage {
    name: string;
    image: string;
}

export const ReactLang: PLanguage = {
    name: 'ReactJs',
    image: React,
}

export const DjangoLang: PLanguage = {
    name: 'Django',
    image: Django,
}

export const FlutterLang: PLanguage = {
    name: 'Flutter',
    image: Flutter,
}

export const PythonLang: PLanguage = {
    name: 'Python',
    image: Python,
}

export const NuxtLang: PLanguage = {
    name: 'Nuxt',
    image: Nuxt,
}
export const VueLang: PLanguage = {
    name: 'VueJs',
    image: Vue,
}
export const TypeScriptLang: PLanguage = {
    name: 'Typescript',
    image: TypeScript,
}
export const HtmlLang: PLanguage = {
    name: 'HTML',
    image: HTML,
}
export const SassLang: PLanguage = {
    name: 'Sass',
    image: SCSS,
}
export const DockerLang: PLanguage = {
    name: 'Docker',
    image: docker,
}
export const GitLang: PLanguage = {
    name: 'Git',
    image: git,
}
export const PHPLang: PLanguage = {
    name: 'PHP',
    image: PHP,
}
export const LaravelLang: PLanguage = {
    name: 'Laravel',
    image: Laravel,
}
export const FlaskLang: PLanguage = {
    name: 'Flask',
    image: Flask,
}
export const JavaLang: PLanguage = {
    name: 'Java',
    image: Java,
}
export const DartLang: PLanguage = {
    name: 'Dart',
    image: Dart,
}
export const LinuxLang: PLanguage = {
    name: 'Linux',
    image: Linux,
}
export const FFMPEG: PLanguage = {
    name: 'FFmpeg',
    image: FFMpeg,
}
export const AfterEffects: PLanguage = {
    name: 'Adobe AfterEffects',
    image: AEffects,
}
export const Photoshop: PLanguage = {
    name: 'Adobe Photoshop',
    image: AdobePhotoshop,
}
export const Premiere: PLanguage = {
    name: 'Adobe Premiere',
    image: AdobePremiere,
}
export const Nginx: PLanguage = {
    name: 'Nginx',
    image: NginxI,
}