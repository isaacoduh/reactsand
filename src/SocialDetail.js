import React from 'react';

const SocialDetail = props => {
    return(
        <div className="ui card">
            <div className="content">
                <div className="right floated meta">14h</div>
                <img src={props.avatar} className="ui avatar image" alt="avatar" /> {props.firstname} {props.lastname}
            </div>
            <div className="image">
                <img src={props.photo} alt="post" height='300' />
            </div>
            <div className="content">
                <span className="right floated">
                    <i className="heart outline like icon"></i>
                    {props.likes}
                </span>
                <span className="right floated">
                    <i className="share outline external alternate icon"></i>
                </span>
                <i className="comment icon">
                </i>
                {props.comments}
            </div>
            <div className="extra content">
                <div className="ui large transparent left icon input">
                    <i className="heart outline icon"></i>
                    <input type="text" placeholder="Post a comment...."/>
                </div>
            </div>
        </div>
    );
};

export default SocialDetail;