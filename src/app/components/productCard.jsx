// import React from "react";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

// const ProductCard = ({ product, name, _id, image, price }) => {
//   const history = useHistory();
//   const handleClick = () => {
//     history.push(history.location.pathname + product._id);
//     // history.push(history.location.pathname + "/edit");
//   };

//   return (
//     <>
//       <tr key={_id}>
//         <td>
//           <div className="card  mb-3">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img
//                   src={image}
//                   className="img-fluid rounded-start"
//                   alt="..."
//                 ></img>
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body bg-light">
//                   <h5 className="card-title">{name}</h5>
//                   <p className="card-text"></p>
//                   <p className="card-text">
//                     {price} ₽
//                     <button
//                       className="btn btn-warning"
//                       onClick={() => handleClick(product._id)}
//                     >
//                       Открыть- карточку
//                     </button>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </td>
//       </tr>
//     </>
//   );
// };

// export default ProductCard;
