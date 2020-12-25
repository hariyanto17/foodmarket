import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {foodDummy, foodDummy1, foodDummy2, foodDummy3} from '../../../assets';
import ItemListFood from '../itemListFood';
import Rating from '../Rating';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: ' 15%',
      marginLeft: '4%',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={foodDummy}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sup Bumil"
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={foodDummy1}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sup Bumil"
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={foodDummy2}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sup Bumil"
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={foodDummy3}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sup Bumil"
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={foodDummy}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sup Bumil"
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={foodDummy1}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sup Bumil"
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={foodDummy2}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sup Bumil"
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={foodDummy3}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sup Bumil"
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={foodDummy}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sup Bumil"
      />
    </View>
  );
};
const PasrOrder = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={foodDummy3}
        type="past-orders"
        items={3}
        price="2.000.000"
        date="jun 12, 14:00"
        status="Cancel"
        name="Sup Bumil"
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={foodDummy}
        type="past-orders"
        items={3}
        price="2.000.000"
        date="jun 12, 14:00"
        name="Sup Bumil"
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Order'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PasrOrder,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: '#FFF'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
