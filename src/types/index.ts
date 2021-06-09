export interface Tech {
    name: string;
    icon: string;
    site: string;
}

export const techList = new Map<string, Tech>([
    [
        'JAVA',
        {
            name: 'Java',
            icon: 'fab fa-java',
            site: 'https://www.java.com/',
        },
    ],
    [
        'SPRING',
        {
            name: 'Spring',
            icon: 'icon icon-spring',
            site: 'https://spring.io/',
        },
    ],
    [
        'FLUTTER',
        {
            name: 'Flutter',
            icon: 'icon icon-flutter',
            site: 'https://flutter.dev/',
        },
    ],
    [
        'DART',
        {
            name: 'Dart',
            icon: 'icon icon-dart',
            site: 'https://dart.dev/',
        },
    ],
    [
        'BOOTSTRAP',
        {
            name: 'Bootstrap',
            icon: 'fab fa-bootstrap',
            site: 'https://getbootstrap.com/',
        },
    ],
    [
        'MONGO_DB',
        {
            name: 'Mongo DB',
            icon: 'icon icon-mongo',
            site: 'https://www.mongodb.com/',
        },
    ],
    [
        'THYMELEAF',
        {
            name: 'Thymeleaf',
            icon: 'icon icon-thymeleaf',
            site: 'https://www.thymeleaf.org/',
        },
    ],
    [
        'HTML',
        {
            name: 'HTML 5',
            icon: 'fab fa-html5',
            site: 'https://www.w3.org/',
        },
    ],
    [
        'JAVASCRIPT',
        {
            name: 'JavaScript',
            icon: 'fab fa-js-square',
            site: '#',
        },
    ],
    ['CSS', { name: 'CSS', icon: 'fab fa-css3', site: '#' }],
    [
        'GOOGLE_CLOUD',
        {
            name: 'Google Cloud',
            icon: 'icon icon-googleCloud',
            site: 'https://cloud.google.com/',
        },
    ],
    [
        'GRADLE',
        {
            name: 'Gradle',
            icon: 'icon icon-gradle',
            site: 'https://gradle.org/',
        },
    ],
    [
        'PYTHON',
        {
            name: 'Python',
            icon: 'fab fa-python',
            site: 'https://www.python.org/',
        },
    ],
    ['VUE', { name: 'Vue', icon: 'fab fa-vuejs', site: 'https://vuejs.org/' }],
    [
        'NODE',
        {
            name: 'Node JS',
            icon: 'fab fa-node',
            site: 'https://nodejs.org/',
        },
    ],
    [
        'NPM',
        {
            name: 'NPM',
            icon: 'fab fa-npm',
            site: 'https://www.npmjs.com/',
        },
    ],
    [
        'REACT',
        {
            name: 'React',
            icon: 'fab fa-react',
            site: 'https://reactjs.org/',
        },
    ],
]);

export interface Portfolio {
    title: string;
    images: Array<string>;
    tech: Array<string>;
    description: string;
    githubLink: string;
    productLink?: string;
    dateCreated: string;
    dateModified: string;
    new: boolean;
}
