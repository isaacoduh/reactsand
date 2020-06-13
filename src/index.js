import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import SocialDetail from './SocialDetail';

const App = () => {
    return(
        <div className="ui container" style={{marginTop: 10 }}>
            <SocialDetail
                avatar='https://picsum.photos/id/237/200/300'
                firstname={faker.name.firstName()}
                lastname={faker.name.lastName()}
                photo='https://picsum.photos/200/100/?grayscale'
                likes='18'
                comments='2'
            />
            <SocialDetail
                avatar={faker.image.avatar()}
                firstname={faker.name.firstName()}
                lastname={faker.name.lastName()}
                photo='https://picsum.photos/seed/picsum/200/100'
                likes='18'
                comments='2'
            />
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));