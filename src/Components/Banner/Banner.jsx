

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <img src="../../../pic_assets/images/user.png" className="md:max-w-screen-sm  rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;