export const getBanners = async ({ filterBy } = {}) => {
    const response = await fetch(`/api/banners?filterBy=${filterBy}`);
    const banners = await response.json();

    return banners;
};
