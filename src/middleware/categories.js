export const addCategory = (category, newCategory) => {
    if(category.id === newCategory.parent) {
        if(!category.subCategories) category.subCategories = [];

        category.subCategories.push(newCategory);

    } else {
        if(category.subCategories) {
            for(let subCategories of category.subCategories) {
                addCategory(subCategories, newCategory);
            }
        }
    }
}

export const removeCategory = (category, itemRemove) => {
    if(category.subCategories) {
        let index = 0;

        for(let subCategory of category.subCategories) {
            if(subCategory.id === itemRemove.id) {
                break
            } else {
                if(subCategory.subCategories) {
                    removeCategory(subCategory, itemRemove);
                }
            }

            index++;
        }

        category.subCategories.splice(index, 1);
    }
}

export const isValidCategory = (newCategory) => {
    if(
        !newCategory.name ||
        (newCategory.name && !newCategory.name.trim())
    ) {
        return {
            value: false,
            options: [
                {key: 'name', message: 'Поле не должно быть пустое'}
            ]
        };
    }

    return {
        value: true,
        options: []
    };
}