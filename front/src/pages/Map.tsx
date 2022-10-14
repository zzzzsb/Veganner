import MainMap from "../components/Map/MainMap"

function Map(){

    return(
        <>
        <div>
            Explore the Vegan World.
            비거너의 비건 맛집 지도를 자유롭게 이용해 보세요.
        </div>
        <section className="MainMap">
            <MainMap/>
        </section>
        </>
        
        
    )
        
};

export default Map;