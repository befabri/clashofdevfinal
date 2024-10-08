type CharacterCard = {
    title: string;
    order: number;
    category: string;
    point: string;
    image: {
        src: string;
        alt: string;
    };
    bgColor: string;
    icon: "asteriskLarge" | "cursorLarge" | "baliseLarge";
    content: string;
    cursors: {
        title: string;
        color: "pink" | "green" | "blue" | "mustard" | "orange" | "purple";
        isTextColored: boolean;
    }[];
};

export const CharacterCardsData: CharacterCard[] = [
    {
        title: "LE MAITRE DE LA FLUIDITÉ",
        order: 1,
        category: "MOTION",
        point: "/3",
        image: {
            src: "motionImage",
            alt: "Le maitre de la fluidité",
        },
        bgColor: "bg-green_light dark:bg-green_dark",
        icon: "asteriskLarge",
        cursors: [
            {
                title: "Lina",
                color: "green",
                isTextColored: false,
            },
            {
                title: "Chris",
                color: "green",
                isTextColored: false,
            },
        ],
        content:
            "<p>Aucun composant ne s'affiche sans une <strong>animation soignée.</strong> Ses transitions sont légères, dynamiques et fluides, captivant l'utilisateur à chaque interaction.</p><p>Ce dev a l'oeil et maitrise <strong>le motion</strong> mieux que n'importe qui.</p>",
    },
    {
        title: "L'ARTISTE DE RENOM",
        order: 2,
        category: "DESIGN",
        point: "/6",
        image: {
            src: "designImage",
            alt: "L'artiste de renom",
        },
        bgColor: "bg-purple_light",
        icon: "cursorLarge",
        cursors: [
            {
                title: "maislina_",
                color: "purple",
                isTextColored: false,
            },
        ],
        content:
            "<p><strong>Le design,</strong> c'est son terrain de jeu. Il maîtrise et retranscrit correctement chaque pixel de la maquette.</p><p>Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing ou de border-radius <strong>; Figma n'a aucun secret pour ce Dev de talent.</strong></p>",
    },
    {
        title: "LE BÂTISSEUR DE CODE",
        order: 3,
        category: "CODE",
        point: "/6",
        image: {
            src: "codeImage",
            alt: "Le bâtisseur de code",
        },
        bgColor: "bg-pink_light",
        icon: "baliseLarge",
        cursors: [
            {
                title: "Chris",
                color: "pink",
                isTextColored: false,
            },
        ],
        content:
            "<p>Ses lignes de code sont des fondations solides. C'est <strong>un maître du front,</strong> capable de structurer les systèmes les plus complexes sans se casser la tête.</p><p><strong>Maitre de VSCode,</strong> il a surement fini le challenge en s'assurant d'avoir le code le plus clair et le plus propre des 36 participants.</p>",
    },
];
