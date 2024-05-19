import CardItems from "./CardItems"
import { Suspense } from "react"
function CardList() {
    return (
        <Suspense fallback={<h2 className="text-3xl text-center font-bold m-10 animate-spin">loading</h2>}>
            <CardItems />
        </Suspense>
    )
}

export default CardList