import React, { useState } from 'react';
import Products from '../Components/Products';
import Feed from "instagram-feed-embed";
import { LinkedInEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { FacebookEmbed } from 'react-social-media-embed';



const Home = () => {
    return (
        <div className= "hero">
            <img src="images/img-home.jpg" className="card-img" alt="Background" height = "550px"/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LinkedInEmbed
                    url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
                    postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
                    width={325}
                    height={570}
                />
            </div>
                <section>
                    <Feed
                        userName="lilie_jewelry"
                        limit={12}
                        width={320}
                        maxContainerHeight={510}
                    />
                </section>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <TikTokEmbed url="https://www.tiktok.com/@epicgardening/video/7055411162212633903" width={325} />
            </div>


        </div>

    );
};

export default Home;