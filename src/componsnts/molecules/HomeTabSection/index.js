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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy}
      />
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy1}
      />
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy2}
      />
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy3}
      />
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy}
      />
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy1}
      />
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy2}
      />
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy3}
      />
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy}
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy3}
      />
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy}
      />
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy3}
      />
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy2}
      />
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy1}
      />
      <ItemListFood
      type="product"
      name="Sop Bumil"
      price="380.000"
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
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

export default HomeTabSection;

const styles = StyleSheet.create({});
