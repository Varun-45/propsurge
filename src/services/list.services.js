// import { db } from "../firebase-config"

// import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from "firebase/firestore"

// const listingsCollectionRef = collection(db, "listings")
// class ListingService {
//     addListings = (newList) => {
//         return addDoc(listingsCollectionRef, newList);

//     };
//     updateList = (id, updateList) => {
//         const listDoc = doc(db, "listings", id);
//         return updateDoc(listDoc, updateDoc);
//     };
//     deleteList = (id) => {
//         const listDoc = doc(db, "listings", id);
//         return deleteDoc(listDoc);
//     };
//     getAlllistings = () => {
//         return getDocs(listingsCollectionRef);
//     };
//     getList = (id) => {
//         const listDoc = doc(db, "listings", id)
//         return getDoc(listDoc);
//     };

// }
// export default new ListingService();