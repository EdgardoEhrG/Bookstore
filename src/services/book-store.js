export default class BookstoreService {

    data = [
        { id: 1, title: 'Les Misérables', author: 'Victor Hugo', price: 300, coverImage: 'http://antique.newbookshop.ru/pict/1012451102.jpg' },
        { id: 2, title: 'Im Westen nichts Neues', author: 'Erich Maria Remarque', price: 200, coverImage: 'https://cv2.litres.ru/pub/c/cover/37395923.jpg' },
        { id: 3, title: 'Theatre', author: 'Somerset Maugham', price: 100, coverImage: 'https://img-gorod.ru/upload/iblock/d13/d139ebac277f4b41cf30d0600eb8b3bd.jpg' },
        { id: 4, title: 'A Streetcar Named Desire', author: 'Tennessee Williams', price: 240, coverImage: 'http://pre14.deviantart.net/3e7e/th/pre/i/2013/029/4/c/a_streetcar_named_desire_by_luimi_m_basantes-d5t4w25.jpg' },
        { id: 5, title: 'A Farewell to Arms', author: 'Ernest Hemingway', price: 120, coverImage: 'http://68.media.tumblr.com/tumblr_lz5zqtUc571qdo62to1_1280.jpg' },
        { id: 6, title: 'The Adventures of Tom Sawyer', author: 'Mark Twain', price: 230, coverImage: 'https://scoopadm.apps-foundry.com/ebook-covers/1145/big_covers/ID_MIZ2013MTH01TATS_B.jpg' },
    ];

    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 900)
        })
    }
}