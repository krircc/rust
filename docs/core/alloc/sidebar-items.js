initSidebarItems({"struct":[["AllocErr","The `AllocErr` error indicates an allocation failure that may be due to resource exhaustion or to something wrong when combining the given input arguments with this allocator."],["CannotReallocInPlace","The `CannotReallocInPlace` error is used when [`grow_in_place`] or [`shrink_in_place`] were unable to reuse the given memory block for a requested layout."],["Excess","Represents the combination of a starting address and a total capacity of the returned block."],["Layout","Layout of a block of memory."],["LayoutErr","The parameters given to `Layout::from_size_align` or some other `Layout` constructor do not satisfy its documented constraints."]],"trait":[["Alloc","An implementation of `Alloc` can allocate, reallocate, and deallocate arbitrary blocks of data described via `Layout`."],["GlobalAlloc","A memory allocator that can be registered as the standard library’s default though the `#[global_allocator]` attributes."]]});