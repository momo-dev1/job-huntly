import {
    ChartBarIcon,
    BriefcaseIcon,
    UserCircleIcon,
    PlusCircleIcon,
    CogIcon,
} from '@heroicons/react/outline'
import { INavigationItem, ISkillOption, ISkill } from "../interfaces/data"

export const navigation: INavigationItem[] = [
    { name: 'Add Job', path: '/dashboard', icon: PlusCircleIcon },
    { name: 'Jobs List', path: '/dashboard/jobs-list', icon: BriefcaseIcon },
    { name: 'Profile', path: '/dashboard/profile', icon: UserCircleIcon  },
    { name: 'Admin', path: '/dashboard/admin', icon: CogIcon },
    { name: 'Reports', path: '/dashboard/stats', icon: ChartBarIcon },
]

export const skillOptions: ISkillOption[] = [
    {
        value: 'javascript',
        label: 'javascript',
        image: "https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge"
    },
    {
        value: 'typescript',
        label: 'typescript',
        image: "https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white&style=for-the-badge"
    },
    {
        value: 'python',
        label: 'python',
        image: "https://img.shields.io/badge/python-3670A0?logo=python&logoColor=ffdd54&style=for-the-badge"
    },
    {
        value: 'angular',
        label: 'angular',
        image: "https://img.shields.io/badge/angular-%23DD0031.svg?logo=angular&logoColor=white&style=for-the-badge"
    },
    {
        value: 'react.js',
        label: 'react.js',
        image: "https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB&style=for-the-badge"
    },
    {
        value: 'next',
        label: 'next',
        image: "https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white&style=for-the-badge"
    },
    {
        value: 'vue.js',
        label: 'vue.js',
        image: "https://img.shields.io/badge/vuejs-%2335495e.svg?logo=vuedotjs&logoColor=%234FC08D&style=for-the-badge"
    },
    {
        value: 'nuxt',
        label: 'nuxt',
        image: "https://img.shields.io/badge/-Nuxt.js-00C58E?style=for-the-badge&logo=Nuxt.js&logoColor=white"
    },
    {
        value: 'bootstrap',
        label: 'bootstrap',
        image: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?logo=bootstrap&logoColor=white&style=for-the-badge"
    },
    {
        value: 'tailwindcss',
        label: 'tailwindcss',
        image: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?logo=tailwind-css&logoColor=white&style=for-the-badge"
    },
    {
        value: 'node.js',
        label: 'node.js',
        image: "https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge"
    },
    {
        value: 'express.js',
        label: 'express.js',
        image: "https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge"
    },
]
export const skillsArr: ISkill[] = [
    {
        name: "javascript",
        icon: "https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge"
    },
    {
        name: "typescript",
        icon: "https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white&style=for-the-badge"
    },
    {
        name: "python",
        icon: "https://img.shields.io/badge/python-3670A0?logo=python&logoColor=ffdd54&style=for-the-badge"
    },
    {
        name: "angular",
        icon: "https://img.shields.io/badge/angular-%23DD0031.svg?logo=angular&logoColor=white&style=for-the-badge"
    },
    {
        name: "react.js",
        icon: "https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB&style=for-the-badge"
    },
    {
        name: "next",
        icon: "https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white&style=for-the-badge"
    },
    {
        name: "vue.js",
        icon: "https://img.shields.io/badge/vuejs-%2335495e.svg?logo=vuedotjs&logoColor=%234FC08D&style=for-the-badge"
    },
    {
        name: "nuxt",
        icon: "https://img.shields.io/badge/-Nuxt.js-00C58E?style=for-the-badge&logo=Nuxt.js&logoColor=white"
    },
    {
        name: "bootstrap",
        icon: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?logo=bootstrap&logoColor=white&style=for-the-badge"
    },
    {
        name: "tailwindcss",
        icon: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?logo=tailwind-css&logoColor=white&style=for-the-badge"
    },
    {
        name: "node.js",
        icon: "https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge"
    },
    {
        name: "express.js",
        icon: "https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge"
    },
]