import { NavigationContainer } from "@react-navigation/native"
import { View } from "react-native";
import { create } from "react-native/types_generated/Libraries/ReactNative/ReactFabricPublicInstance/ReactNativeAttributePayload";

const Tab = create.bottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App