import { View, Text, StyleSheet, Animated } from 'react-native'
import { useLinkBuilder } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import Ionicons from '@expo/vector-icons/Ionicons';

const icons = {
  index: {
    focused: (props) => <Ionicons name="home" size={20} color={grayColor} {...props} />,
    unfocused: (props) => <Ionicons name="home-outline" size={20} color={grayColor} {...props} />
  },
  search: {
    focused: (props) => <Ionicons name="search" size={20} color={grayColor} {...props} />,
    unfocused: (props) => <Ionicons name="search-outline" size={20} color={grayColor} {...props} />
  },
  booking: {
    focused: (props) => <Ionicons name="calendar" size={20} color={grayColor} {...props} />,
    unfocused: (props) => <Ionicons name="calendar-outline" size={20} color={grayColor} {...props} />
  },
  menu: {
    focused: (props) => <Ionicons name="menu" size={20} color={grayColor} {...props} />,
    unfocused: (props) => <Ionicons name="menu-outline" size={20} color={grayColor} {...props} />
  },
}

const primaryColor = "#6F35A5";
const grayColor = "#2F2E41";

export default function TabBar({ state, descriptors, navigation}) {
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.tabBar}>
      {/* loop to render each tab */}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // render each tab
        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className='flex-1 items-center justify-center flex flex-col gap-y-2.5'
          >
            {icons[route.name] && icons[route.name][isFocused ? 'focused' : 'unfocused']({ color: isFocused ? primaryColor : grayColor })}
            {isFocused && (
              <Text style={{ color: isFocused ? primaryColor : grayColor }}>
              {label}
            </Text>
            )}
          </PlatformPressable>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    borderCurve: 16,
    shadowColor: "#000", //black
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
})