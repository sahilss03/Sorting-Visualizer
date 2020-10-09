//BUBBLE SORT
document.getElementById('bubble_sort_button').addEventListener('click',BubbleSort);
function BubbleSort()
{
    let n=arr.length;
    for(let i=0 ; i<n-1 ; i++)
    {
        for( let j=0 ; j<n-i-1 ; j++)
        {
            if(height[j]>height[j+1])
            {
                let t=height[j+1];
                height[j+1]=height[j];
                height[j]=t;
                arr[j].style.height=`${height[j]}px`;
                arr[j+1].style.height=`${height[j+1]}px`;
                
            }
        }
    }
}


