export default function BookList() {
   let pageTitle = "LIST FOR CHILDREN WHO READ GOOD AND WANT TO DO OTHER THINGS GOOD TOO";
   let book1 = "https://m.media-amazon.com/images/I/71mI9mN-11L._SL1499_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/513Vc5q1UVL._SL1360_.jpg";
   let book3 = "https://content.packt.com/_/image/original/B19719/cover_image.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="build social skillz" />
         <img src={book2} alt="do mushrooms" />
         <img src={book3} alt="Some research jus dont matters" />
      </div>      
   );
}