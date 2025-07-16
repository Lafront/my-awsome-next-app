export default function NotFoundReviewPage() {
    return (
        <div>
            <h1>404 - Review Not Found</h1>
            <p>Sorry, the review you are looking for does not exist.</p>
        </div>
    );
}

// --------if we want to use the pathname to show the productId and reviewId---------------

// 'use client';
// import { usePathname } from "next/navigation";


// export default function NotFoundReviewPage() {
//     const pathname = usePathname();
//     const productId = pathname.split('/')[2];
//     const reviewId = pathname.split('/')[4];
//     return (
//         <div>

//             <p>Product {productId} dose not exist for review {reviewId}.</p>
//         </div>
//     );
// }