import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
            //app.css mea styling karege with banner-card
            <div className="card banner-card">
                <img src="https://th.bing.com/th/id/R.3f47d77cf1341bcb9c688560b14fa72d?rik=425Fd7BguNLMlw&riu=http%3a%2f%2fcafmp.com%2fwp-content%2fuploads%2f2013%2f01%2fBrave-Teaser.jpg&ehk=%2fo0L2xkJcBFjh%2be%2fhxk5STfR%2bsP%2bxbTNVWAQ3JX%2fRHI%3d&risl=&pid=ImgRaw&r=0" className="card-img-top banner-img" alt="..." />


                <h5 className="card-title banner-title">Card title</h5>
                <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>


            </div>
        )
    }
}

export default Banner