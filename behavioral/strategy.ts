interface SortingStrategy {
    sort(array: number[]): number[]
}

class BubbleSortStrategy implements SortingStrategy {
    sort(array: number[]): number[] {
        return array.sort((a,b) => a - b);
    }
}

class QuickSortStrategy implements SortingStrategy {
    sort(array: number[]): number[] {
        return array.sort((a,b) => a - b);
    }
}

class Sorter {
    private strategy: SortingStrategy = new BubbleSortStrategy();

    setSortStrategy(strategy: SortingStrategy) {
        this.strategy = strategy;
    }

    performSort(array: number[]) {
        return this.strategy.sort(array);
    }
}

const sorter = new Sorter();

const bubbleSort = new BubbleSortStrategy();
const quickSort = new QuickSortStrategy();

sorter.setSortStrategy(bubbleSort);
const sortedArray1 = sorter.performSort([5, 2, 8, 1, 7]);
console.log("Sorted using bubble sort:", sortedArray1);
console.log("--------");

sorter.setSortStrategy(quickSort);
const sortedArray2 = sorter.performSort([10, 4, 6, 3, 9]);
console.log("Sorted using quicksort:", sortedArray2);
