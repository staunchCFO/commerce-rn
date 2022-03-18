import React from "react"
import {
    View,
    Image
} from "react-native"
// Importing from RNGH instead of RN to avoid getting the vazualized list warning
import { FlatList } from "react-native-gesture-handler"

import { SIZES, constants} from "../../constants" 

const ITEM_WIDTH = 120;

const Walkthrough1 = () => {

    // First Row images: This will enable smooth scrolling for the images
    const [ row1Images, setRow1Images ] = React.useState([
        ...constants.walkthrough_01_01_images,
        ...constants.walkthrough_01_01_images
    ])

    // Total enable the automatic scrolling
    const [ currentPosition, setCurrentPosition ] = React.useState(0)

    // Second Row ima ges: for smooth scrolling 
    const [ row2Images, set2RowImages ] = React.useState([
        ...constants.walkthrough_01_02_images,
        ...constants.walkthrough_01_02_images
    ])
    
    // Total enable the automatic scrolling
    const [ row2CurrentPosition, setRow2CurrentPosition ] = React.useState(0)

    // Defining the FlatList useRef
    const row1FlatListRef = React.useRef()
    const row2FlatListRef = React.useRef()

    return (
        <View>
            {/* Slider 1 */}
            <FlatList 
                ref={row1FlatListRef} 
                decelerationRate="fast"
                horizontal
                showsHorizontalScrollIndicator={false}
                listKey="Slider1"
                keyExtractor={(_, index) => `Slider1_${index}`}
                data={row1Images}
                renderItem={(item, index) => {
                    return ( 
                        <View
                            style={{
                                width: ITEM_WIDTH,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Image 
                                source={item}
                                style={{
                                    width: 110,
                                    height: 110
                                }}
                            />
                        </View>
                    )
                }}
            />

            {/* Slider 2 */}
            <FlatList 
                ref={row2FlatListRef} 
                decelerationRate="fast"
                stle={{
                    marginTop: SIZES.padding
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                listKey="Slider2"
                keyExtractor={(_, index) => `Slider2_${index}`}
                data={row2Images}
                renderItem={(item, index) => {
                    return ( 
                        <View
                            style={{
                                width: ITEM_WIDTH,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Image 
                                source={item}
                                style={{
                                    width: 110,
                                    height: 110
                                }}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Walkthrough1
