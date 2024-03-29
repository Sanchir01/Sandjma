import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../services/product.service'
import { IProduct } from '../types/service.interface'
import { useSelector } from 'react-redux'
import { selectCategories } from '../Store/Slice/FilterSlice'
