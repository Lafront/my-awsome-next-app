import { notFound } from "next/navigation";
export default async function ProductReviewPage({
    params,
}: {
    params: Promise<{ productId: string, reviewId: string }>;
}) {

    const { productId, reviewId } = await params;
    if (Number(reviewId) > 1000) {
        notFound();
    }

    return (
        <div>
            <h1>Reviews for Product {productId}</h1>
            <p>Review ID: {reviewId}</p>
            <p>This is the reviews page for product {productId} with review ID {reviewId}.</p>
        </div>
    );
}