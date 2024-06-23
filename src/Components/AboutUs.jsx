import "./AboutUs.css";

export default function AboutUs(){
    return(

        <div class="aboutus-container">
        <h2>About Us</h2>
        <h1>Our Journey Through the Years</h1>
        <p>Discover the milestones that have shaped our bakery into the beloved establishment it is today.</p>
        <div class="milestones">
            <div class="milestone">
                <h3>1850</h3>
                <p>Founded with a passion for baking, our story began in a small kitchen.</p>
            </div>
            <div class="milestone">
                <h3>1897</h3>
                <p>Expanded our offerings to include a variety of delightful pastries.</p>
            </div>
            <div class="milestone">
                <h3>1951</h3>
                <p>Opened our first storefront, becoming a staple in the community.</p>
            </div>
            <div class="milestone">
                <h3>2011</h3>
                <p>Introduced modern baking techniques while preserving our traditional recipes.</p>
            </div>
        </div>
    </div>
    );
}