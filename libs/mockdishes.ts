
export interface IDish {
    image_src: string;
    rating: number;
    name: string;
    description: string;
    cost: number; 
    in_cart: boolean;
}

const mockDishes: (page: number) => IDish[] = (page) => {
    const imagesCount = 6;
    const itemsPerPage = 8;
    let items: IDish[] = [];
    for (let index = 0; index < itemsPerPage; index++) {
        items.push({
            image_src: `/dish${(page + index) % imagesCount}.png`,
            rating: index % 6,
            name: "New York Vega",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            cost: 1.7,
            in_cart: false
        });
    }
    return items;
};

export default mockDishes;