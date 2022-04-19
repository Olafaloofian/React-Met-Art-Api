

function Gallery(props) {
    return ( 
        <div style={{width: '100%'}}>
            <p>{`by ${props.artist} ${props.medium}`}</p>
            <img src={props.objectImg} alt={props.title} />
        </div>
    )
}

export default Gallery