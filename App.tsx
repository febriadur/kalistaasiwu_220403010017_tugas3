import React from 'react';
import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selamat datang di Aplikasi Penjualan baju online</Text>
      <TextInput placeholder="Cari produk..." />
      <ScrollView>
        <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTngkCAYmwqsKfsl_av1Tk5oEEVkS2kszRr_9Gs_rYA&s.jpg'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3WQfY9LHxSf45lNcincKKOk1BHHVL6PrHuJJgSSopg&s.jpg'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wgVLQMk7VACWO_6-zg6XdOg8adDhY06q09HAV_Yavw&s.jpg'}}style={{width:200,height:200}}/>
      </ScrollView>
      <Button title="Beli" onPress={() => ('Produk telah ditambahkan ke keranjang belanja')} />
    </View>
  );
};

export default App;