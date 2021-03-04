const SectionOneMain = () => {
    return (
        <section className="section">
            <div className="section-title">
                <h2 className="section-description">About me</h2>
            </div>
            <div className="features">
                <img
                    src="https://res.cloudinary.com/milenajovanovic994/image/upload/v1614813550/projekat/Gagi/Screenshot_20210303-225922_Instagram_okg3nv.jpg"
                    alt="Gagi"
                    className="features-img"
                />
                <div className="features-feature">
                    <h5 className="features-header">My biography</h5>
                    <p>Welcome to my website! I believe that I am not yet as famous as I'd like to be, so that my picture can speak for me. Therefore, I will tell you a little bit about myself. My name is Dragan Jovanović, and I am a huge gastronomy aficionado! One thing that distinguishes my style from others' is that I try to fuse traditional into modern cousine. My love towards cooking has been born in my early childhood, continued growing trough my High school, and now I am upgrading it while studying at Gastronomy University in Serbia.</p>
                </div>
                <div className="features-feature">
                    <h5 className="features-header">Competitions</h5>
                    <p>One fact that I am definitely certain of is that competitions made me the chef I am today. As a member of The Association of Catering Hotel and Tourist Workers of Nis, I started competing early, during my high school days. Those events were held in my birth town - Niš. After some gold medals, I needed bigger challenges, so I started travelling across Europe and the World searching for new adventures. None of that would be possible without my mentor Zoran Mirašević, who opened so many doors for me. One of my biggest accomplishments is winning several golden medals in Denizli, Turkey at Gastro World Master Chefs International Competition. Besides that, I have many competitions behind me, and many more waiting for me in the future. </p>
                </div>
                <img
                    src="https://res.cloudinary.com/milenajovanovic994/image/upload/v1614813578/projekat/Gagi/Screenshot_20210303-234441_Instagram_y00ddf.jpg"
                    alt="Competitions"
                    className="features-img" style={{ marginTop: '16rem' }}
                />
                <img
                    src="https://res.cloudinary.com/milenajovanovic994/image/upload/v1614816049/projekat/Gagi/Screenshot_20200824-232319_Instagram_htiwxj.jpg"
                    alt="Enjoy"
                    className="features-img" style={{width: '35rem', marginTop: '8rem'}}
                />
                <div className="features-feature" style={{ marginBottom: '2rem'}}>
                    <h5 className="features-header">Vision</h5>
                    <p>You may wonder how I got the idea for this website... Well, my main goal is to motivate people who are passionate about cooking, people who have desire for trying new things in life, but are somewhat shy to take a first step. This is a safe place for all of us to share our knowledge and learn something new, to make new friends and exchange experiences. I invite you all to create your account and enjoy reading my recipes and other users' and posting some of yours'! </p>
                </div>
            </div>
        </section >
    )
}
export default SectionOneMain