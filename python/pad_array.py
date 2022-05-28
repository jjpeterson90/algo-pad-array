#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None):
    if min_size > len(array):
        for i in range(min_size-len(array)):
            array.append(value)
    else:
        return array
    
    return array


# print(pad([1,2,3], 5))
# print(pad([1,2,3], 5, 'apple'))
# print(pad([1,2,3], 1))