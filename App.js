import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, ToastAndroid, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { addUser, getAllUsers, getUserById, deleteUser } from "./services";

export default function App() {
  const [data, setData] = useState([]);

  const getAll = async () => {
    try {
      let response = await getAllUsers();
      setData(JSON.parse(JSON.stringify(response.data)));
      console.log("Data Size is:", data.length);
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.LONG);
    }
  };

  const getById = async () => {
    try {
      let response = await getUserById(1);
      setData(JSON.parse(JSON.stringify(response.data)));
      console.log("Name : ", data.name);
      console.log("Email : ", data.email);
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.LONG);
    }
  };

  const dltUser = async () => {
    try {
      let response = await deleteUser(8);
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.LONG);
    }
  };

  const user = {
    name: "Mos Def",
    email: "yassin@gmail.com",
  };

  const add = async () => {
    try {
      let response = await addUser(user);
      console.log("User Added");
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.LONG);
    }
  };

  useEffect(() => {
    //getAll();
    //getById();
    //dltUser();
    // add();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}> Single Data</Text>
      <Text style={{ fontSize: 10 }}> Name : {data.name}</Text>
      <Text style={{ fontSize: 10 }}> Name : {data.email}</Text>
      <Text
        style={{
          fontSize: 10,
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      ></Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}> Collection</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                padding: 5,
              }}
            >
              <Text style={{ fontSize: 10 }}>Id: {item.id}</Text>
              <Text style={{ fontSize: 10 }}> Name: {item.name} </Text>
              <Text style={{ fontSize: 10 }}> Email: {item.email} </Text>
            </View>
          )}
        />
      ) : (
        <Text style={{ fontSize: 10 }}> no data</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
