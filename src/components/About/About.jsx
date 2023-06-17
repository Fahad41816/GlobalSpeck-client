import React from 'react';
import Title from '../../pages/shared/title/Title';
import image from '../../assets/image/logo.png'

const About = () => {
    return (
    <section className="py-16  ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center font-bold mb-6"> <Title title={"About us"}></Title> </h2>
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <img src={image} alt="School" className="w-full h-auto mb-6 rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              Welcome to our Class Selling Website! We offer a wide range of classes taught by experienced instructors. Whether you're looking to learn a new language, enhance your programming skills, or explore various hobbies, we have the perfect classes for you.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              Our mission is to provide high-quality education to individuals of all ages and backgrounds. We believe in creating a supportive learning environment where students can thrive and achieve their goals. Our instructors are experts in their fields and are passionate about sharing their knowledge with others.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              With our easy-to-use website, you can browse through our class catalog, read detailed class descriptions, and enroll in the classes that interest you. We also offer flexible payment options and a seamless registration process. Join us on this educational journey and unlock your full potential!
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default About;