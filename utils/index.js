export const checkImageUrl = (url) => {
    if (!url) return false;
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|gif|png|svg|webp|bmp|ico|webp)$','i');
        return pattern.test(url);
    }
}