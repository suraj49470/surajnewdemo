import initialState from './initialState';
import * as ConstantTypes from '../constants/constantActions';

export default function productReducer(state = initialState.products,action){
              
              switch(action.type){
                    
                      case ConstantTypes.PRODUCT_LISTING_SUCCESS:
                         
                         return action.products;

                       default :

                         return state;

              }
}