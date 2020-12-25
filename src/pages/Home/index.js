import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {foodDummy, foodDummy1, foodDummy2, foodDummy3} from '../../assets';
import {
  FoodCard,
  Gap,
  HomeTabSection,
  ProfileContainer,
} from '../../componsnts';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <ProfileContainer />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodContainer}>
              <Gap width={24} />
              <FoodCard image={foodDummy} />
              <FoodCard image={foodDummy1} />
              <FoodCard image={foodDummy2} />
              <FoodCard image={foodDummy3} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  foodContainer: {
    flexDirection: 'row',
  },
  tabContainer: {
    flex: 1,
  },
});
