import { faker } from "@faker-js/faker";

import { Anime } from "../src/domain/Anime";

export class AnimeMother {
	static create(params?: Partial<Anime>): Anime {
		const defaultParams: Anime = {
			id: faker.datatype.number(),
			url: faker.internet.url(),
			title: faker.random.words(3),
			image_url: faker.image.cats(),
			score: faker.datatype.number(),
			...params,
		};

		return defaultParams;
	}
}
