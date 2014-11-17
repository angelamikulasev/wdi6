# To find index of element e with certain value:
# Start with an array sorted in descending order.
# In each step:
# Pick the middle element of the array (m) and compare it to e.
# If element values are equal, then return index of m.
# If e is greater than me, then e must be in left subarray. If m is greater than e, e must be in the right subarray.
# Repeat those steps on new subarray.

require 'pry'
class Array
  def binary_search(val)
    low, high = 0, length - 1
    while low <= high
      mid = (low + high) / 2
      case
        when self[mid] > val then high = mid - 1
        when self[mid] < val then low = mid + 1
        else return mid
      end
    end
    nil
  end
end
 
ary = [0,1,4,5,6,7,8,9,12,26,45,67,78,90,98,123]
 
[0,42,45].each do |val|
  i = ary.binary_search(val)
  if i
    puts "found #{val} at index #{i}: #{ary[i]}"
  else
    puts "#{val} not found in array"
  end
end





# binding.pry

# BinarySearch(array, value) {
#     low = 0
#     high = array.length - 1
#     while (low <= high) {
#         mid = (low + high) / 2
#         if (A[mid] > value)
#             high = mid - 1
#         else if (A[mid] < value)
#             low = mid + 1
#         else
#             return mid
#     }
#     return not_found
# }