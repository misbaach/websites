export type CarouselItemProps = {
    image: string;
    title: string;
}

const CarouselItem = (props: CarouselItemProps) => {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <img className="aspect-square object-cover" width={100} height={100} src={props.image} />
            <h2 className="text-center">{props.title}</h2>
        </div>
    )
}

export default CarouselItem