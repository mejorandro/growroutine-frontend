import Container from "../_components/container";
import Header from "../_components/header";

export default function LoadingDraft() {
    return (
        <Container>
            <Header></Header>
            <main className="py-12 max-w-3xl mx-auto animate-pulse">
                {/* Title skeleton */}
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                {/* Summary skeleton */}
                <div className="h-5 bg-gray-200 rounded w-5/6 mb-8"></div>

                {/* Sections skeleton */}
                <div className="space-y-6">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="space-y-2">
                            <div className="h-5 bg-gray-300 rounded w-1/3"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                            <div className="h-4 bg-gray-200 rounded w-10/12"></div>
                        </div>
                    ))}
                </div>
            </main>
        </Container>
    )
}
