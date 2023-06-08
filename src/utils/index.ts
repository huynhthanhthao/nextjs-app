export const ensureString = (value: any): string => {
    try {
        if (value !== undefined && value !== null) {
            return value;
        }
    } catch (error) {
        return '';
    }
    return '';
};
