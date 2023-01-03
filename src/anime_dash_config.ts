
export interface AnimeDashConfig {
	widgets: {
		id: number;
		url: string;
		title: string;
		image_url: string;
	}[];
}

export const config: AnimeDashConfig = {
	widgets: [
		{
			id: 32182,
			url: "https://myanimelist.net/anime/32182/Mob_Psycho_100",
			title: "Mob Psycho 100",
			image_url: "https://cdn.myanimelist.net/images/anime/8/80356.jpg",
		},
		{
			id: 42307,
			url: "https://myanimelist.net/anime/42307/Subarashiki_Kono_Sekai_The_Animation",
			title: "Subarashiki Kono Sekai The Animation",
			image_url: "https://cdn.myanimelist.net/images/anime/1016/111566.jpg",
		},
		{
			id: 2904,
			url: "https://myanimelist.net/anime/2904/Code_Geass__Hangyaku_no_Lelouch_R2",
			title: "Code Geass: Hangyaku no Lelouch R2",
			image_url: "https://cdn.myanimelist.net/images/anime/4/9391.jpg",
		},
	],
};