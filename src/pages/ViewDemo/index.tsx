import {ComponentClass} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'

type PageOwnProps = {}

type PageState = {}

class Index extends Component {
    config: Config = {
        navigationBarTitleText: 'ViewDemo 页'
    }

    render() {
        return (
            <View>
                <View><Text>Hello, World</Text></View>
            </View>
        )
    }
}

export default Index as ComponentClass<PageOwnProps, PageState>
