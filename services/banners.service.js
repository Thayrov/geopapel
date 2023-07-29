import { getBannersFromDB } from '../dao/models/bannerModel.js';

export const getBannersService = async (filterBy) => {
    const results = await getBannersFromDB(filterBy);
    const banners = results.map((page) => {
        const { properties } = page;
        const { URL } = properties;

        if (URL && URL.multi_select && URL.multi_select.length > 0) {
            return {
                bannerURL: URL.multi_select[0].name,
            };
        } else {
            return {
                bannerURL: null,
            };
        }
    });
    return banners;
};
