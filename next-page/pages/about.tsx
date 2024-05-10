import Image from 'next/image'
const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Image 
            src="/static/cat.jpg"
            alt="cat"
            width={1000}
            height={800}
            />
            <p>This is the about page</p>
        </div>
    );
};

export default About;
