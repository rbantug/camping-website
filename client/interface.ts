export interface Camps {
    name: string;
    slug: string;
    shortDescription: string;
    fullDescription: string;
    price: string;
    image: string;
    imageHires: string;
    blurryImg: string;
    status: 'available' | 'full';
    amenities: string[];
    category: 'forest' | 'beach' | 'mountain'
}