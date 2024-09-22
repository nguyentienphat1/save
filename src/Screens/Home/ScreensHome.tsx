import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Avata,
  Buttoncomponent,
  CardConvesation,
  Container,
  Row,
  Section,
  SpaceComponent,
  Textconponent,
  UserComponent,
} from "../../components";
import { processFontFamily } from "expo-font";
import { globaStyles } from "../../styles/globaStyles";
import { fontFamily } from "../../constant/fontFamily";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constant/Colors";
import { usesr } from "../../data/users";
import {
  addDoc,
  arrayRemove,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { fs } from "../../firebase/firebaseConfig";
import { UserModel } from "../../model/UserModel";

const ScreensHome = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    onSnapshot(collection(fs, `users`), (snap) => {
      if (snap.empty) {
        console.log("Data not found ");
      } else {
        const items : UserModel[]= []
        snap.forEach((item : any) => {
          // console.log(item.data());
          items.push({
            key:item.id,
            ...item.data()
          })
        });
        setUsers(items);
      }
    });
  }, []);

  const handleAddUserDemo = () => {
    usesr.forEach((user) => {
      addDoc(collection(fs, "users"), user)
        .then((snap) => {
          console.log("add user done ");
          // updateDoc(doc(fs, `users/${snap.id}`),{
          //   id: arrayRemove(''),})
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const favourites = [
    {
      id: 1,
      title: "my duyen",
      imageURL:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSiSvRO-13Uvoz0rGgvLfVgU9gVSPu51-_M1J5N4CpfMdmg64rL",
      isfavourit: true,
    },
  ];

  return (
    <Container>
      <Section
        styles={{
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <Row>
          <Avata photourl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSiSvRO-13Uvoz0rGgvLfVgU9gVSPu51-_M1J5N4CpfMdmg64rL" />
          <Textconponent
            text="asdasda"
            tyle="title"
            size={24}
            styles={{ textTransform: "capitalize" }}
            flex={1}
            font={fontFamily.medium}
          />
        </Row>
      </Section>
      <Section>
        <Row>
          <Row
            styles={[
              globaStyles.input,
              {
                flex: 1,
                justifyContent: "flex-start",
                paddingHorizontal: 0,
                paddingLeft: 12,
              },
            ]}
          >
            <Textconponent text="search" flex={1} />
            <Buttoncomponent
              color="#565E70"
              icon={<Ionicons name="search" color={Colors.white} size={30} />}
              onpress={() => {}}
            />
          </Row>
          <SpaceComponent width={16} />
          <Buttoncomponent
            icon={<Ionicons name="add" color={Colors.white} size={30} />}
            onpress={() => {}}
          />
        </Row>
      </Section>

      <Textconponent
        styles={{ paddingHorizontal: 16 }}
        tyle="title"
        text="Favouries"
        size={20}
      />

      <View>
        <FlatList
          horizontal
          style={{ paddingLeft: 8, marginTop: 12 }}
          data={Array.from({ length: 15 })}
          renderItem={({ item, index }) => (
            <CardConvesation
              item={favourites[0]}
              key={`conversation${index}`}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <SpaceComponent height={24} />

      {/* <View>
        <FlatList
          onScroll={(val) => console.log(val.nativeEvent.contentOffset.y)}
          style={{ paddingLeft: 8, marginTop: 12 }}
          data={Array.from({ length: 15 })}
          renderItem={({ item, index }) => (
            <Row
              styles={{
                paddingHorizontal: 16,
                paddingVertical: 12,
                alignItems: "flex-start",
              }}
            >
              <Avata photourl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSiSvRO-13Uvoz0rGgvLfVgU9gVSPu51-_M1J5N4CpfMdmg64rL" />
              <View style={{ flex: 1, paddingHorizontal: 12 }}>
                <Textconponent
                  text={favourites[0].title}
                  font={fontFamily.medium}
                />
                <Textconponent text="asdsadsad" />
              </View>
              <Textconponent text="08:43" font={fontFamily.medium} />
            </Row>
          )}
        />
      </View> */}
      <Section>
      {
        users.length > 0 ? (
          <FlatList 
            removeClippedSubviews
            showsVerticalScrollIndicator ={false}
            data = {users}
            renderItem={({item}) => 
              
              <UserComponent user={item}/>
              
            }
          />
        ):(
          <Textconponent text="data not found!!!"/>
        )
      }
      </Section>
    </Container>
  );
};
export default ScreensHome;
