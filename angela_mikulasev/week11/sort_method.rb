require 'pry'
def merge_sort(array)
  return array if array.size <= 1
  # break down the array to middle right and left
  middle = array.size / 2
  right = array[middle, array.size]
  left = array[0, middle]
  merge(merge_sort(left), merge_sort(right))
end

# if the number on the left is less than or equal to the number on the right shift one place right
# need to append the number to the empty sorted array
# after break up the array, need to concatenate the string back together
def merge(left, right)
  sorted = []
  until left.empty? or right.empty?
    if left.first <= right.first
      sorted << left.shift
    else
      sorted << right.shift
    end
  end
  sorted.concat(left).concat(right)
end

binding.pry

# a = [12, 2, 44, 3, 1, 99]
#   => [12, 2, 44, 3, 1, 99]
# merge_sort(a)
#   => [1, 2, 3, 12, 44, 99]



