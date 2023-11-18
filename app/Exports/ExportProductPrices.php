<?php

namespace App\Exports;

use App\Models\ProductPrice;
use Maatwebsite\Excel\Concerns\FromCollection;

class ExportProductPrices implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return ProductPrice::with(['group', 'product'])->orderBy('created_at', 'DESC')->simplePaginate(500)->through(function ($item) {
            return [
                'id' => $item->id,
                'amount' => $item->amount,
                'center' => $item->center,
                'group' => $item->group->name,
                'name' => $item->product->name,
                'from_date' => $item->from_date,
                'to_date' => $item->to_date,
                'is_discount_approved' => $item->is_discount_approved,
                'is_ado' => $item->is_ado,
                'status' => $item->statusString
            ];
        });

    }
}
