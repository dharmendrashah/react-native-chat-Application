import Reacr, {Component} from 'react';
import Text from 'react-native';

import {Header} from 'react-native-elements';
export default class AllHeader extends Component{
    return(){
        render(
            <>
           <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />

            </>
        );
    }
}